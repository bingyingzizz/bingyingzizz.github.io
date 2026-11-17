# Generalized Eigenvector　`def.generalized-eigenvector`
English entry · root `../`
[in graph](../#n=def.generalized-eigenvector)　·　[Chinese page (authoritative)](./def.generalized-eigenvector.md)

Let $T : V \to V$ be linear and $\lambda$ an eigenvalue. A vector $v \ne 0$ is called a **generalized eigenvector** of $\lambda$ if

$\Bigl(T - \lambda I\Bigr)^{k}(v) = 0$ (for some $k \ge 1$)

The least such $k$ is called the **order** of $v$. All generalized eigenvectors together with $0$ form the **generalized eigenspace**

$$G_{\lambda} := \bigcup_{k \ge 1}\ker(T - \lambda I)^{k} = \ker(T - \lambda I)^{m} ,$$

where $m$ is the algebraic multiplicity of $\lambda$ (the sequence stabilizes at that power).

> continued in nodes/def.generalized-eigenvector.en.3.md
