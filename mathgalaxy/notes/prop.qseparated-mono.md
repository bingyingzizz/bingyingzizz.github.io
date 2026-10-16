# 拟分离嵌入底空间　`prop.qseparated-mono`　·　说明
根 `../`

**证明。** 只需对每个紧 Hausdorff $S$ 验证 $X(S) \to \underline{X(\cdot)}(S) = C(S, X(\cdot))$ 是单射 ✓（单态射按点检验）。
由「可数递增余极限」那一条的推广（拟分离 $\iff$ 含入过渡的滤过余极限），$X = \varinjlim_i S_{i}$ 且 $X(S) = \varinjlim_i \operatorname{Hom}(S, S_{i})$ ✓。
取 $f, g \in X(S)$ 映到同一个连续映射：它们都来自某个 $i$ 的 $\tilde f, \tilde g : S \to S_{i}$，而 $S_{i} \hookrightarrow X(\cdot)$ 是含入、特别地是单射 ✓，于是 $\tilde f = \tilde g$，从而 $f = g$ ✓。∎

⭐ 读法：**拟分离的凝聚态集不会丢信息** —— 它整个能从底空间里被读回来。反面是一般凝聚态集的底空间会把精细结构抹掉。
