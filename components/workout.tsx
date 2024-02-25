import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

export default function Workout() {
    const exercises = [
        {
            name: 'Bench Press',
            sets: 3,
            reps: 8,
            weight: 135,
            equipment: 'Barbell',
            media: ''
        },
        {
            name: 'Squat',
            sets: 3,
            reps: 8,
            weight: 135,
            equipment: 'Barbell',
            media: ''
        },
        {
            name: 'Deadlift',
            sets: 3,
            reps: 8,
            weight: 135,
            equipment: 'Barbell',
            media: ''
        },
        {
            name: 'Overhead Press',
            sets: 3,
            reps: 8,
            weight: 135,
            equipment: 'Barbell',
            media: ''
        },
    ]
    return (
        <section className='w-full flex gap-6 flex-col'>
            <h2 className="text-3xl font-bold">Workout</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Exercise</TableHead>
                        <TableHead>Sets</TableHead>
                        <TableHead>Reps</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Equipment</TableHead>
                        <TableHead>Media</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    
                        {exercises.map((exercise, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{exercise.name}</TableCell>
                                    <TableCell>{exercise.sets}</TableCell>
                                    <TableCell>{exercise.reps}</TableCell>
                                    <TableCell>{exercise.weight}</TableCell>
                                    <TableCell>{exercise.equipment}</TableCell>
                                    <TableCell>{exercise.media}</TableCell>
                                </TableRow>
                            )
                        })}
                    
                    <TableRow>
                        <TableCell colSpan={6}>
                            <Button className="w-full text-xl" variant='outline'>+</Button>
                        </TableCell>
                        
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}