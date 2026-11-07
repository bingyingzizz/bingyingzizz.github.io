# Banach 空间都是凝聚态阿贝尔群　`prop.banach-as-condensed`　·　说明
根 `../`

**第二步：有界 $T$ 给出凝聚态态射。** 设 $T:E\to F$ 有界。对每个 $S$ 令 $T_S(f):=T\circ f$；则 $\|T_S f\|\le \|T\|\,\|f\|$，故 $T_S$ 连续，且它是群同态。对 $u:S_1\to S_2$ 有 $T_{S_1}(f\circ u)=T_{S_2}(f)\circ u$，故 $(T_S)_S$ 与限制映射相容，给出 $\mathrm{CondAb}$ 的态射 $\underline{T}:\underline{E}\to\underline{F}$；恒等与复合逐点保持，故 $T\mapsto \underline{T}$ 是函子性的。

> 续见 notes/prop.banach-as-condensed.4.md
