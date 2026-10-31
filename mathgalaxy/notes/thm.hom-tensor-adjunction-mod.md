# 张量与内同态的伴随　`thm.hom-tensor-adjunction-mod`　·　说明
根 `../`

**证明（显式写映射）**：记 $\Phi(f) := \bigl(m \mapsto (n \mapsto f(m \otimes n))\bigr)$。反向 $\Psi(g) := \bigl(m \otimes n \mapsto g(m)(n)\bigr)$：因为 $(m, n) \mapsto g(m)(n)$ 是平衡双加性的，由 `def.tensor-module` 的万有性质它唯一地给出 $\Psi(g)$。$\Phi \Psi$ 与 $\Psi \Phi$ 在纯张量（或 $M$ 的生成元）上是恒等，而生成元张成整个模，故互逆。自然性：$\Phi$ 的公式里没有任何选取，只用到 $\otimes$ 与复合。∎

⭐ 这就是**curry 化**：两个变元的东西，与「取值在函数空间里」的一个变元的东西，是同一件事。

**两条推论立刻可用**：$(-) \otimes_{R} N$ 是左伴随，故**保余极限**（右正合、保直和、保滤过余极限）；$\operatorname{Hom}_{R}(N, -)$ 是右伴随，故**保极限**（左正合、保积）。

📌 非交换版本：$M$ 右 $R$-模、$N$ 左 $R$-模、$P$ 为阿贝尔群时，同一条同构改写成

> 续见 notes/thm.hom-tensor-adjunction-mod.2.md
