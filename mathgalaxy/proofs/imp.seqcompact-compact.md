# 列紧 $\implies$ 紧
`imp.seqcompact-compact` · 推出 · strong 边 · 根 `../`

`def.sequentially-compact` 列紧 → `def.compact` 紧

用**反证 + 一串不断缩小的「坏球」**。设 $X$ 列紧。

**① $X$ 全有界** —— 用上面那条箭头「列紧 $\implies$ 全有界」。

**② 造嵌套的坏球。** 设 $\mathcal{U}$ 是 $X$ 的开覆盖，且它**没有**有限子覆盖。由全有界，$X$ 能被有限个半径 1 的开球盖住；其中必有一个球不能被 $\mathcal{U}$ 的有限多个成员盖住 —— 否则把每个球各自的有限覆盖并起来，就得到 $\mathcal{U}$ 的一个有限子覆盖。称这样的球为**坏球**，取一个记作 $B_{1}$。

再把 $B_{1}$ 用有限个半径 1/2 的球盖住（$B_{1} \subseteq X$，全有界性对它同样管用），其中必有一个坏球 $B_{2} \subseteq B_{1}$。如此继续，得到

> 续见 proofs/imp.seqcompact-compact.2.md
