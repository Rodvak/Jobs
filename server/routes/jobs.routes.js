const JobsController = require("./../controllers/jobs.controller")

module.exports = (app) => {
    app.get("/api/jobs", JobsController.allJobs)
    app.post("/api/jobs", JobsController.createJob)
    app.get("/api/jobs/:id", JobsController.oneJob)
    app.put("/api/jobs/:id", JobsController.updateJob)
    app.delete("/api/jobs/:id", JobsController.deleteJob)
}