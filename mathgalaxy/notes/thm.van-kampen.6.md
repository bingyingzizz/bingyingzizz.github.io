# van Kampen 定理　`thm.van-kampen`　·　说明
根 `../`

**第四步（互逆）**：$\Psi \circ \bar{\Phi} = \operatorname{id}_{P}$：只需在自由积的生成元（一个落在 $U$ 或 $V$ 里的环路）上验证。若环路整个在 $U$ 里，按第一步取不细分（或细分后每段都在 $U$）的分解，得到的字就是它自己在 $\pi_{1}(U)$ 中的类，故成立；对 $V$ 同理，而自由积的生成元生成整个 $P$。$\bar{\Phi} \circ \Psi = \operatorname{id}_{\pi_{1}(X)}$：第一步已经说明 $\alpha$ 与「$W(\alpha)$ 对应的环路之积」定端同伦，取 $\Phi$ 即得。于是 $\bar{\Phi}$ 是同构。∎

**两个常用特例**：

- $G = 1$（交叠单连通）$\implies$ $\pi_{1}(X) \cong \pi_{1}(U) * \pi_{1}(V)$（自由积，一般非阿贝尔、无限）；

- $\pi_{1}(U) = \pi_{1}(V) = 1$ $\implies$ $\pi_{1}(X) = 1$（**与 $G$ 无关**，见 `cor.pi1-sphere`）。

> 续见 notes/thm.van-kampen.7.md
