# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

⚠️ **原来的说法要更正**：门槛不是「$k^{(m)} > n - m$」—— `k^{(m)}` 是没定义的记号。且 Whitney 的反例落在 **$n-m = 1,\ k = 1$** 那一侧（存在 $C^{1}$ 的 $f:\mathbb{R}^{2}\to\mathbb{R}$，临界值有正测度），**不是** $n = m$ 的情形：$n = m$ 时门槛退化成 $k\ge1$，$C^{1}$ 就够，那里没有 $C^{1}$ 反例。

细节：Milnor《Topology from the Differentiable Viewpoint》§3；Sternberg《Lectures on Differential Geometry》§II.3；Guillemin–Pollack §2。∎（提纲）

> ⚠ 「∎」在这里标记的是**提纲的完整交付**，不是定理的完整证明。这一条是本图上少数几条明确标注「不给完整证明」的定理之一 —— 理由是完整证明的篇幅与所用工具（Fubini + Whitney 分解）都超出了本团其余内容的层次。
