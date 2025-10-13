export const testConnection = (request, response) => {
    try {
        console.log(request.body)
        response.status(200).json({
            message: "Data received successfully",
            data: request.body
        })
    } catch (error) {
        response.status(500).json({ message: "Server error, try again" })
    }
}