# 乘积测度通常不完备
`imp.product-incomplete` · 推出 · strong 边 · 根 `../`

`def.product-measure` 乘积测度 → `prop.product-incomplete` 乘积测度通常不完备

取 $X = Y = [0, 1]$，$\mu = \nu = Lebesgue$ 测度（都是完备的）。令

$$D = \{(x, x) : x \in [0, 1]\}$$

则 $D$ 是闭集，故属于 $\mathfrak{B}_{[0,1]} \otimes  \mathfrak{B}_{[0,1]}$；且 $\mu \times \nu(D)$ 可以用截口公式算：对每个 $x$，$\nu(D_x) = \nu(\{x\}) = 0$，故

$$\mu \times \nu(D) = \int \nu(D_x) d\mu(x) = 0$$

**关键**：取一个 Lebesgue 测度为 0 但**不可测**（不属 $\mathfrak{B}_\{[0,1]\}$）的子集 $N \subseteq [0,1]$，令

$$G = \{(x, x) : x \in N\} \subseteq D$$

> 续见 proofs/imp.product-incomplete.2.md
