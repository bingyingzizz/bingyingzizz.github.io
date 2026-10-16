# 矩阵表示 + 乘法对应复合 $\implies$ 相似
`imp.change-of-basis` · 推出 · strong 边 · 根 `../`

`thm.matrix-linear-map` 线性映射 ⟷ 矩阵 → `thm.change-of-basis` 基变换与相似

记 $P := [\mathrm{id}]_{\mathcal{B}'}^{\mathcal{B}}$。由矩阵表示对复合的乘性，

$$[T]_{\mathcal{B}'} = [\mathrm{id} \circ T \circ \mathrm{id}]_{\mathcal{B}'}^{\mathcal{B}'} = [\mathrm{id}]_{\mathcal{B}}^{\mathcal{B}'}\ [T]_{\mathcal{B}}^{\mathcal{B}}\ [\mathrm{id}]_{\mathcal{B}'}^{\mathcal{B}} = P^{-1}\,[T]_{\mathcal{B}}\,P$$

其中 $[\mathrm{id}]_{\mathcal{B}}^{\mathcal{B}'} = P^{-1}$ 是因为两个过渡矩阵互为逆（$(P^{-1}P)$ 是恒等映射在两同一组基下的矩阵，即 $I_n$）。

由「可逆 $\iff$ 双射」一栏的等价，$P$ 可逆。

> 续见 proofs/imp.change-of-basis.2.md
