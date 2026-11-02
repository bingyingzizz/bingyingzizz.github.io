# 极分解　`thm.polar-decomposition`　·　续页（第 2 页）
[在星图里打开](../#n=thm.polar-decomposition)　·　第 1 页 [nodes/thm.polar-decomposition.md](./thm.polar-decomposition.md)

## 陈述（续）
设 $A \in M_{n}(\mathbb{C})$。则存在酉矩阵 $U$ 与**半正定** Hermite 矩阵 $P$ 使

$$A = UP ,$$
且 $P$ 由 $A$ 唯一确定（$P = \sqrt{A^{*}A}$）；若 $A$ 可逆，则 $U$ 也唯一，且 $P$ 正定。
**另一种次序**：同样有 $A = P'U'$，其中 $P' = \sqrt{AA^{*}}$ 半正定、$U'$ 酉。
**与 SVD 的关系**：把 $P$ 对角化（$P = V\Sigma V^{*}$）即得 $A = (UV)\Sigma V^{*}$ —— 这正是奇异值分解；$\Sigma$ 的对角元就是**奇异值**。

> 续见 [nodes/thm.polar-decomposition.3.md](./thm.polar-decomposition.3.md)
