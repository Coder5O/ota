
-- Remove the open insert policy; membership now goes through edge function with service role
DROP POLICY "Anyone can submit membership" ON public.members;

-- Add length constraints on members table
ALTER TABLE public.members
  ADD CONSTRAINT first_name_length CHECK (char_length(first_name) <= 100),
  ADD CONSTRAINT last_name_length CHECK (char_length(last_name) <= 100),
  ADD CONSTRAINT email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT phone_length CHECK (char_length(phone) <= 20),
  ADD CONSTRAINT address_length CHECK (char_length(address) <= 500);

-- Add length constraints on events table
ALTER TABLE public.events
  ADD CONSTRAINT title_length CHECK (char_length(title) <= 200),
  ADD CONSTRAINT description_length CHECK (char_length(description) <= 2000),
  ADD CONSTRAINT location_length CHECK (char_length(location) <= 200),
  ADD CONSTRAINT event_time_length CHECK (char_length(event_time) <= 50);
