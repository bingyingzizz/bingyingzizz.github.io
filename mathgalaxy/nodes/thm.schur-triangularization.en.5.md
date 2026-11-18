# Schur Triangularization　`thm.schur-triangularization`
English entry · root `../`
[in graph](../#n=thm.schur-triangularization)　·　[Chinese page (authoritative)](./thm.schur-triangularization.md)

**Induction**: Apply the induction hypothesis to $A_{1}$. There is a unitary matrix of order $(n-1)$, denoted by $V$, such that $V^{*}A_{1}V = T_{1}$ is upper triangular. Set $U_{2} := \operatorname{diag}(1, V)$ and $U := U_{1}U_{2}$. The matrix $U_{2}$ is unitary (it is block diagonal with two unitary blocks), so $U$ is unitary. Applying $U_{2}$ on both sides of $U_{1}^{*}AU_{1}$ leaves the upper-left entry $\lambda$ unchanged, changes the upper-right block to $w^{*}V$, leaves the lower-left block equal to $0$, and changes the lower-right block to $V^{*}A_{1}V = T_{1}$. Thus $U^{*}AU$ i

> continued in nodes/thm.schur-triangularization.en.6.md
