# 酉矩阵与正交矩阵　`def.unitary-matrix`　·　续页（第 2 页）
[在星图里打开](../#n=def.unitary-matrix)　·　第 1 页 [nodes/def.unitary-matrix.md](./def.unitary-matrix.md)

## 陈述（续）
⚠️ 有限阶时**只需这一个等式**：$U^{*}U = I$ 已说明 $U$ 单射，方阵单射即可逆，于是 $U^{*} = U^{-1}$，再右乘 $U$ 得 $UU^{*} = I$（反过来用 $UU^{*} = I$ 一样）。等价地 $U^{-1} = U^{*}$。实方阵 $Q \in M_{n}(\mathbb{R})$ 满足 $Q^{T}Q = I$ 时叫**正交矩阵**。
**等价刻画**：以下三条等价 —— (i) $U$ 酉；(ii) $U$ 的**列**构成标准正交基；(iii) 对一切 $x, y$ 有 $\langle Ux, Uy\rangle = \langle x, y\rangle$。
于是酉矩阵保持内积、从而保持范数（$\lVert Ux\rVert = \lVert x\rVert$）与距离；$\lvert\det U\rvert = 1$。全体酉矩阵构成群 $U(n)$，正交矩阵构成 $O(n)$。

> 续见 [nodes/def.unitary-matrix.3.md](./def.unitary-matrix.3.md)
