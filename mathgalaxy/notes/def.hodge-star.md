# Hodge 星号　`def.hodge-star`　·　说明
根 `../`

**为什么存在唯一**：$\beta \mapsto \langle \beta,\alpha\rangle$ 是 $\Lambda^{k}T_{p}^{\ast}M$ 上的线性泛函，而 $\beta \wedge (-) : \Lambda^{k} \to \Lambda^{n}$ 与 $\mathrm{vol}$ 一起给出「$\Lambda^{n-k} \to \mathbb{R}$」与「$\Lambda^{k} \to \mathbb{R}$」的**配对**（非退化），于是那个线性泛函唯一地对应一个 $(n-k)$-形式。逐点做、再验证光滑。

📌 **坐标里的一行公式**：取定向标准正交余标架 $e^{1}, \ldots, e^{n}$（此时 $\mathrm{vol} = e^{1}\wedge\cdots\wedge e^{n}$），则

$$*(e^{i_{1}}\wedge\cdots\wedge e^{i_{k}}) \;=\; \operatorname{sgn}(\sigma)\, e^{j_{1}}\wedge\cdots\wedge e^{j_{n-k}},$$

其中 $\{j\}$ 是补集、按递增排列，$\sigma$ 是排列 $(i_1,\ldots,i_k, j_1,\ldots,j_{n-k})$ 的符号。

⭐ **它的用途在下一层**：$\delta := (-1)^{nk+n+1} *\mathrm{d}*$（余微分）要用 $*$ 写出来；有了 $\delta$ 才有 $\Delta = \mathrm{d}\delta + \delta\mathrm{d}$ 与**调和形式**，然后才有 Hodge 定理（每个 de Rham 类有唯一调和代表元）。

> 续见 notes/def.hodge-star.2.md
