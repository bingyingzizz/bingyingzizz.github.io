# Darboux’s Theorem　`thm.darboux`
English entry · root `../`
[in graph](../#n=thm.darboux)　·　[Chinese page (authoritative)](./thm.darboux.md)

**Step 4: Solve the equation and integrate to obtain a flow**. Each $\omega_{t}$ is nondegenerate, so the linear map $X \mapsto \iota_{X}\omega_{t}$ is an isomorphism $T_{x}M \to T_{x}^{*}M$. There is a unique smooth vector field $X_{t}$ satisfying $\iota_{X_{t}}\omega_{t} = -\theta$, and $X_{t}$ depends smoothly on $(t, x)$. Treat $t$ as an extra coordinate and apply `thm.flow-local` on $M \times \mathbb{R}$ to the vector field $(X_{t}, \partial_{t})$. This gives, near $p$ and defined on $[0, 1]$, a local flow $\varphi_{t}$ satisfying $\varphi_{0} = \operatorname{id}$ and $\frac{d}{dt}\varphi_{t}(x) = X_{t}(\varphi_{t}(x))$. Shrink $U$ again if necess

> continued in nodes/thm.darboux.en.9.md
