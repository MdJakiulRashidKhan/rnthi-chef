import { motion } from "framer-motion";
import React, { useState } from "react";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const validIds = new Set([1001, 1005, 1010, 1020, 1030, 1040, 1050]);

  const handleInputChange = (e) => {
    setCertificateId(e.target.value);
    setVerificationResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (attempts >= maxAttempts) {
      setError("Too many attempts. Please try again later.");
      return;
    }

    if (!certificateId.trim()) {
      setError("Please enter a Certificate ID.");
      return;
    }

    const id = parseInt(certificateId, 10);
    if (isNaN(id)) {
      setError("Please enter a valid numeric Certificate ID.");
      return;
    }

    try {
      if (validIds.has(id)) {
        setVerificationResult({
          isValid: true,
          details: {
            name: "Md Kamrul Hasan",
            course: "Chef",
            issueDate: "2024-01-01",
          },
        });
        setAttempts(0);
      } else {
        throw new Error("Invalid Certificate ID");
      }
    } catch (err) {
      setError(
        "Error verifying certificate. Please check the ID and try again."
      );
      setAttempts(attempts + 1);
    }
  };

  const handleReset = () => {
    setCertificateId("");
    setVerificationResult(null);
    setError(null);
    setAttempts(0);
  };

  return (
    <div className="flex justify-center mt-8 items-center h-min-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Certificate Verification
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="certificateId" className="block font-semibold mb-1">
              Certificate ID:
            </label>
            <input
              type="text"
              id="certificateId"
              value={certificateId}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Certificate ID"
              disabled={attempts >= maxAttempts}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {attempts > 0 && attempts < maxAttempts && (
              <p className="text-yellow-500 text-sm">
                Attempts remaining: {maxAttempts - attempts}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition-all"
              disabled={attempts >= maxAttempts}
            >
              Verify
            </button>
            {attempts >= maxAttempts && (
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg w-full ml-2 transition-all"
              >
                Reset
              </button>
            )}
          </div>
        </form>

        {verificationResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 border rounded-lg bg-green-100"
          >
            <h2 className="text-xl font-bold text-green-700">
              Verification Result:
            </h2>
            {verificationResult.isValid ? (
              <p className="text-green-600 font-semibold">
                Certificate is valid!
              </p>
            ) : (
              <p className="text-red-600">Certificate is invalid.</p>
            )}
            {verificationResult.details && (
              <div className="mt-3">
                <p>
                  <strong>Name:</strong> {verificationResult.details.name}
                </p>
                <p>
                  <strong>Course:</strong> {verificationResult.details.course}
                </p>
                <p>
                  <strong>Issue Date:</strong>{" "}
                  {verificationResult.details.issueDate}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;
