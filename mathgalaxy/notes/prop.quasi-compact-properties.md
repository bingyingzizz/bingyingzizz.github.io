# 拟紧的性质　`prop.quasi-compact-properties`　·　说明
根 `../`

**逐条证明。**
**1.** site 里的覆盖族与它在标准拓扑下生成的层范畴里的覆盖族一一对应（次标准性保证可表示层原样保留），而「拟紧」只用到覆盖族这件事，故两种说法一致 ✓。
**2.** 设 $X$ 被拟紧对象 $X_{1}, \ldots, X_{n}$ 的有限族覆盖，给 $X$ 的任一覆盖 $(Y_{j}\to X)$。对每个 $k$ 沿 $X_{k}\to X$ 拉回得到 $X_{k}$ 的覆盖 $(Y_{j}\times_{X}X_{k} \to X_{k})$；由 $X_{k}$ 拟紧抽出有限子族 $(j \in J_{k})$。则 $J := \bigcup_{k}J_{k}$ 有限，且 $(Y_{j}\to X)_{j\in J}$ 已是覆盖（每支 $X_{k}$ 都被覆盖，而 $\{X_{k}\}$ 覆盖 $X$）✓。
**3.** $(\Longleftarrow)$ 若 $X \to F$ 满且 $X \in \mathcal{C}$，则任何由可表示层给出的覆盖 $(h_{X_{i}} \to F)$ 沿 $X \to F$ 拉回得到 $X$ 的覆盖，由「$h_{X}$ 拟紧」（$X \in \mathcal{C}$）抽出有限子族，复合 $h_{X_{i}} \to h_{X} \to F$ 给出 $F$ 的有限子覆盖 ✓。
$(\implies)$ 反之，$\mathcal{C}$ 的对象构成层范畴的生成元族，故有满态射 $\coprod_{i}h_{X_{i}} \to F$；由 $F$ 

> 续见 notes/prop.quasi-compact-properties.2.md
