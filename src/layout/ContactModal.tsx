import { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";

export default function ContactModal() {
    const { isOpen, close } = useContactModal();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                close();
                setSubmitted(false);
            }}
            maxWidth="md"
            fullWidth
        >
            <DialogContent className="p-6 sm:p-8">
                {submitted ? (
                    <Box className="py-6 text-center">
                        <Typography variant="h5" className="font-bold" color="text.primary">
                            Thank you! 🎉
                        </Typography>
                        <Typography className="mt-2" color="text.secondary">
                            Your message has been sent. Our team will get back
                            to you within 24 hrs.
                        </Typography>
                    </Box>
                ) : (
                    <Stack spacing={2.5}>
                        <Typography variant="h5" className="font-extrabold" color="text.primary">
                            Have a Question? Let&apos;s Get in Touch with us 👋
                        </Typography>
                        <Typography color="text.secondary">
                            Fill up the form and the team will get back to you
                            within 24 hrs.
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} className="grid gap-5">
                            <TextField
                                label="Name"
                                required
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                label="E-mail"
                                type="email"
                                required
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                label="Subject"
                                required
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                label="Message"
                                multiline
                                minRows={3}
                                fullWidth
                                variant="standard"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                className="mt-2 w-fit bg-primary px-6 py-3 text-base font-semibold text-white"
                            >
                                Send Message{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Box>
                    </Stack>
                )}
            </DialogContent>
        </Dialog>
    );
}
