# 开满射是满态射　`prop.cond-epi-open-surjective`　·　说明
根 `../`

**证明。** 由「凝聚态集满态射的判据」，只需对每个**自由**紧 Hausdorff 空间 $F$ 验证 $C(F, X) \to C(F, Y)$ 是满射 ✓。
给 $g : F \to Y$。因为 $F$ 紧、$Y$ 弱 Hausdorff，$g(F)$ 是紧 Hausdorff 子集 ✓，于是存在紧 Hausdorff $S \subseteq X$ 使 $g(F) = f(S)$ ✓。
$F$ 是紧 Hausdorff 范畴里的**投射对象**（自由即投射），所以 $F \to f(S)$ 可提升为 $F \to S$ ✓，再嵌回 $X$ 即得 $g$ 的原像 ✓。∎
**特例的验证。** $X$ 局部紧时每个点有紧邻域 $S_x$；$f$ 开说明 $f(S_x)$ 是 $f(x)$ 的邻域，$f$ 满说明 $Y = \bigcup_x f(S_x)$ ✓；$Y$ 里任何紧集被有限多个 $f(S_{x_i})$ 覆盖，取 $S := \bigcup_i S_{x_i}$（有限并仍是紧 Hausdorff）✓。

⭐ 这是「一个拓扑映射在两个拓扑空间之间是满态射」的可操作判据：**先看弱 Hausdorff，再看紧块的像够不够大**。
