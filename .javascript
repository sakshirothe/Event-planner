// Function to get a unique professor and a specified number of volunteers
            function assignCommitteeMembers(committeeName, targetVolunteers, departmentKeywords = []) {
                let assignedProfessor = null;
                let selectedVolunteers = new Set();
                let members = [];

                // Assign one unique professor
                if (availableProfessors.length > 0) {
                    // Try to find a relevant professor first
                    const relevantProfIndex = availableProfessors.findIndex(p => departmentKeywords.some(keyword => p.department.includes(keyword)));
                    if (relevantProfIndex !== -1) {
                        assignedProfessor = availableProfessors[relevantProfProfIndex]; // This line was the error. It should be relevantProfIndex, not relevantProfProfIndex.
                        availableProfessors.splice(relevantProfIndex, 1); // Remove assigned professor
                    } else {
                        // If no relevant professor, pick any available professor
                        assignedProfessor = availableProfessors.shift(); // Take the first available professor
                    }
                    if (assignedProfessor) {
                        members.push(`Prof. ${assignedProfessor.name.split(' ').slice(1).join(' ')}`);
                    }
                }
