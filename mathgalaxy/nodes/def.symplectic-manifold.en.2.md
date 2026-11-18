# Symplectic Manifold　`def.symplectic-manifold`
English entry · root `../`
[in graph](../#n=def.symplectic-manifold)　·　[Chinese page (authoritative)](./def.symplectic-manifold.md)

Let $M$ be a smooth manifold (**there is no need to assume even dimension in advance**, as shown below). A **symplectic form** on $M$ is a 2-form $\omega \in \Omega^{2}(M)$ satisfying

1. **Closedness**: $d\omega = 0$.
2. **Nondegeneracy**: At each point $p$, $\omega_{p} : T_{p}M \times T_{p}M \to \mathbb{R}$ is nondegenerate (the manifold version of `def.symplectic-form`).

We call $(M, \omega)$ a **symplectic manifold**. Nondegeneracy implies $\dim M = 2n$ (apply `thm.symplectic-normal-form` pointwise).

> continued in nodes/def.symplectic-manifold.en.3.md
