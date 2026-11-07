# Gram–Schmidt $\Longrightarrow$ 酉相似（Schur 的「酉」那一半）
`imp.gram-schmidt-schur` · 推出 · strong 边 · 根 `../`

`thm.gram-schmidt` Gram–Schmidt 正交化 + `thm.fundamental-algebra` 代数基本定理 → `thm.schur-triangularization` Schur 三角化

**① 每一步都要正交基**。Schur 归纳取单位特征向量 $u_{1} = x$（存在性由**代数基本定理**保证 —— $\chi_{A}$ 有复根；Gram–Schmidt 只把基**酉化**），再把 $(x, e_{2}, \ldots, e_{n})$ 用 **Gram–Schmidt** 正交化成酉基 $U_{1} = (u_{1}, \ldots, u_{n})$；正交性 $u_{1}^{*}u_{j} = 0$（$j \ge 2$）让 $U_{1}^{*}AU_{1}$ 的左下角整块为零。

**② 拼起来**。对 $A_{1}$（$u_{1}^{\perp} \cong \mathbb{C}^{n-1}$ 上的压缩）归纳得 $(n-1)$ 阶酉矩阵 $V$，令 $U_{2} = \operatorname{diag}(1, V)$、$U = U_{1}U_{2}$：两块都酉故 $U$ 酉，于是 $U^{*}AU = T$ 上三角 ✓。

> 续见 proofs/imp.gram-schmidt-schur.2.md
