# Rayleigh Quotient　`def.rayleigh-quotient`
English entry · root `../`
[in graph](../#n=def.rayleigh-quotient)　·　[Chinese page (authoritative)](./def.rayleigh-quotient.md)

## Notes · **draft**
**Why it is real**: $\overline{x^{*}Ax} = x^{*}A^{*}x = x^{*}Ax$ (using Hermitian), and the denominator is real.

⭐ **It gives the theoretical basis for steepest descent/power iteration**: moving along the gradient of $R_A$ is approximating the largest eigenvector. Numerically $x_{k+1} \propto Ax_k$ converges to the dominant eigenvector at a rate governed by $\lvert\lambda_2/\lambda_1\rvert$ — this is the convergence rate of the power method.

> continued in nodes/def.rayleigh-quotient.en.4.md
