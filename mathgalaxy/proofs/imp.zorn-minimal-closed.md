# Zorn 引理：紧 Hausdorff 满射有极小的闭定义域
`imp.zorn-minimal-closed` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `lem.minimal-closed-surjection` 满射的极小闭子集

设 $f : S \to T$ 是紧 Hausdorff 空间之间的连续满射。令

$$\mathcal{S} := \{\, S' \subseteq S : S'\ \text{闭},\ f|_{S'}\ \text{仍满} \,\},$$

按**反包含**排序（即 $S' \preceq S'' \iff S' \supseteq S''$）：这样「极大元」就是「极小的闭子集」。

**链有上界**：取链 $\{S_{\alpha}\}$，令 $S'' := \bigcap_{\alpha} S_{\alpha}$（闭集之交仍闭）。它仍满：若 $f(S'') \ne T$，取 $t \notin f(S'')$；每个 $f(S_{\alpha})$ 都是含 $t$ 的紧集，故 $\{f(S_{\alpha}) \setminus \{t\}\}$ 是一族「有限交非空、整体交为空」的闭集族 —— 与 $T$ 的紧性矛盾（有限交性质）。

由 Zorn 引理得极大元 $S_{0}$，它在原包含序下极小。
