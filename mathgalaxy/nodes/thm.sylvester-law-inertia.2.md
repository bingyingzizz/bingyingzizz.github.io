# 惯性定理　`thm.sylvester-law-inertia`　·　续页（第 2 页）
[在星图里打开](../#n=thm.sylvester-law-inertia)　·　第 1 页 [nodes/thm.sylvester-law-inertia.md](./thm.sylvester-law-inertia.md)

## 陈述（续）
设 $A$ 是 $n$ 阶实对称矩阵。则存在可逆 $P$ 使

$$P^{T} A\, P = \operatorname{diag}(\underbrace{1,\ldots,1}_{p},\ \underbrace{-1,\ldots,-1}_{q},\ \underbrace{0,\ldots,0}_{z}) ,$$

且 $p, q, z$ 由 $A$ 唯一确定（`def.inertia-index`）。
**推论（合同分类）**：**同阶**的两个实对称矩阵合同 $\iff$ 它们有相同的 $(p, q)$（阶不同时连矩阵乘法都做不了：$[1]$ 与 $\operatorname{diag}(1,0)$ 都有 $(p,q) = (1,0)$ 却不合同）。
**推论（正定性）**：$A$ 正定 $\iff p = n$ $\iff$ $A$ 合同于 $I$。

> 续见 [nodes/thm.sylvester-law-inertia.3.md](./thm.sylvester-law-inertia.3.md)
