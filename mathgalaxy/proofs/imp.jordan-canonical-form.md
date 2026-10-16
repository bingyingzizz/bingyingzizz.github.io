# 根子空间分解 + 幂零块 $\implies$ Jordan 标准形
`imp.jordan-canonical-form` · 推出 · strong 边 · 根 `../`

`thm.primary-decomposition` 根子空间分解 + `thm.factor-theorem` 因式定理与根 → `thm.jordan-canonical-form` Jordan 标准形

1. 由主分解，$V = \bigoplus_i V_i$，每个 $V_i$ 是 $T$-不变的，且 $T|_{V_i} = \lambda_i I + N_i$，其中

$$N_i := (T - \lambda_i I)|_{V_i}$$

是**幂零**的（因为 $V_i = \ker (T - \lambda_i I)^{m_i}$）。只要在每个 $V_i$ 上把幂零算子化成标准形，拼起来就是 Jordan 形。
2. **幂零算子的标准形**：设 $N$ 在有限维空间 $W$ 上幂零。对 $k = 1, 2, \ldots$ 有链

$$\{0\} \subseteq \ker N \subseteq \ker N^{2} \subseteq \cdots \subseteq \ker N^{s} = W$$

> 续见 proofs/imp.jordan-canonical-form.2.md
