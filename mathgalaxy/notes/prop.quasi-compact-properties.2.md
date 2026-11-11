# 拟紧的性质　`prop.quasi-compact-properties`　·　说明
根 `../`

则 $J := \bigcup_{k}J_{k}$ 有限，且 $(Y_{j}\to X)_{j\in J}$ 已是覆盖（每支 $X_{k}$ 都被覆盖，而 $\{X_{k}\}$ 覆盖 $X$）✓。
**3.** $(\Longleftarrow)$ 若 $X \to F$ 满且 $X \in \mathcal{C}$，则任何由可表示层给出的覆盖 $(h_{X_{i}} \to F)$ 沿 $X \to F$ 拉回得到 $X$ 的覆盖，由「$h_{X}$ 拟紧」（$X \in \mathcal{C}$）抽出有限子族，复合 $h_{X_{i}} \to h_{X} \to F$ 给出 $F$ 的有限子覆盖 ✓。
$(\implies)$ 反之，$\mathcal{C}$ 的对象构成层范畴的生成元族，故有满态射 $\coprod_{i}h_{X_{i}} \to F$；由 $F$ 拟紧抽出有限子族 $(i \in I,\ \#I < \infty)$，令 $X := \coprod_{i\in I}X_{i} \in \mathcal{C}$，则 $h_{X} = \coprod_{i\in I}h_{X_{i}} \to F$ 仍满 ✓。

—— 在凝聚态集里这条读作「凝聚态集拟紧 $\iff$ 有紧 Hausdorff 空间到它的满射」✓。

∎

第 3 条最有用：它把「层 $F$ 拟紧」换成了「$F$ 能被一个小对象盖住」—— 在凝聚态集里，这就是「凝聚态集 $X$ 拟紧 $\iff$ 存在紧 Hausdorff 空间到它的满射」。

> 续见 notes/prop.quasi-compact-properties.3.md
