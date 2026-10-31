# 秩定理的淹没情形 $r = m$ 就是隐函数定理
`imp.derived-implicit-from-rank` · 推出 · strong 边 · 根 `../`

`cor.rank-theorem` 常秩定理 → `thm.implicit-function` 隐函数定理

**③ 切空间横截。** $T_{(a,b)}S = \ker DF(a,b)$：一边是「$F$ 在 $S$ 上恒 $0$」，另一边维数对得上（$n = (n+m) - m$）。而 $\ker DF \cap (\{0\} \times \mathbb{R}^{m}) = \{0\}$ —— 落在后一块里的向量满足 $D_{y}F \cdot v = 0$，$D_{y}F$ 可逆；$\ker DF$ 里后一半坐标为零的向量也满足 $D_{y}F \cdot v = 0$。

> 续见 proofs/imp.derived-implicit-from-rank.4.md
