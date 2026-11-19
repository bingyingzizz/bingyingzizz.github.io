# imp.real-banach-chaus-acyclic
`imp.real-banach-chaus-acyclic` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.cech-complex` Čech 复形 + `def.cech-cohomology` Čech 上同调 + `def.banach-space` Banach 空间 → `thm.real-banach-chaus-acyclic` 实 Banach 在紧 Hausdorff 上零调

**证法**。

① 用 Stonean 空间 $S_{0}$ 满射到 $S$（由「紧 Hausdorff 空间沿闭含入的滤过余极限 / Stonean 覆盖」那套技术得到）；② 在 $S_{0}$ 上由「Banach 在 Stone 上零调」知道 Čech 复形零调；

③ 比较 $S_{0} \to S$ 的 Čech 复形与 $S$ 本身的上同调，偏差项住在 $C(K, V)$ 里；

④ 用 **Tietze 延拓（Banach 值）** 把偏差压掉，得到 $S$ 上的**有界**零调；

⑤ 用「$K$-有界零调 $\implies$ 零调」转成通常零调。

> 续见 proofs/imp.real-banach-chaus-acyclic.2.md
