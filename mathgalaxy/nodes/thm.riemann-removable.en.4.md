# Riemann's Removable Singularity Theorem　`thm.riemann-removable`
English entry · root `../`
[in graph](../#n=thm.riemann-removable)　·　[Chinese page (authoritative)](./thm.riemann-removable.md)

$$|I_\varepsilon(z)| \le \frac{\varepsilon \, \|f\|_{\partial B(a, \varepsilon)}}{|z - a| - \varepsilon} \longrightarrow 0 \qquad (\varepsilon \to 0),$$

the last step uses exactly the hypothesis $(z - a) f(z) \to 0$.

But $I_\varepsilon(z)$ is **independent** of the choice of $\varepsilon \in (0, |z - a|)$, so it must be identically $0$.

Hence $f = I_{\rho}$ is holomorphic on $B(a, \rho)$, and one sets $f(a) := I_{\rho}(a)$ ($\rho < r$ arbitrary; the values agree for different $\rho$).

⭐ Use: it lets "removable singularity" really be treated as absent.

> continued in nodes/thm.riemann-removable.en.5.md
