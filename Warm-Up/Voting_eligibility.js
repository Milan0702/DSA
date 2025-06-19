function votingEligibility(age) {
    if (age < 0) {
        return "Invalid Input.";
    } else if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote..";
    }
}