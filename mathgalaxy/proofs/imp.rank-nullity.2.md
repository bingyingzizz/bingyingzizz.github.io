# 第一同构定理 + 维数 $\implies$ 秩-零化度定理
`imp.rank-nullity` · 推出 · strong 边 · 根 `../`

`thm.first-iso-vs` 第一同构定理（向量空间版） + `thm.dimension` 维数良定义 + `def.rank` 秩 + `def.nullity` 零化度 → `thm.rank-nullity` 秩-零化度定理

（扩充的合法性：Steinitz 交换引理 / 「每个线性无关集都能扩充成基」）。
2. **断言 $T(v_1), \ldots, T(v_{n-k})$ 是 $\operatorname{im} T$ 的基。**
   - *生成*：任取 $T(v)$，把 $v$ 按上面的基展开，落在 $\ker T$ 的那些项被 $T$ 杀掉，剩下 $T(v) = \sum_j c_j T(v_j)$。
   - *无关*：若 $\sum_j c_j T(v_j) = 0$，则 $T\bigl(\sum_j c_j v_j\bigr) = 0$，即 $\sum_j c_j v_j \in \ker T$；把它用 $u_i$ 展开并与 $v_j$ 那部分的唯一性比较，得所有 $c_j = 0$。
3. 于是 $\operatorname{rank} T = \dim \operatorname{im} T = n - k = \dim V - \operatorname{null} T$

> 续见 proofs/imp.rank-nullity.3.md
