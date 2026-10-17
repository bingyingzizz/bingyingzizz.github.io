# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

**为什么需要 $k > n - m$：** 上面 $m = 1$ 那一层用了二阶 Taylor 余项 $O(\|h\|^{2})$；一般情形每降一维就多要一阶导数，累加需要 $k^{(m)} > n - m$ 阶。Whitney 的 $C^{1}$ 反例正说明这个门槛不可省。

细节：Milnor《Topology from the Differentiable Viewpoint》§3；Sternberg《Lectures on Differential Geometry》§II.3；Guillemin–Pollack §2。∎（提纲）

> ⚠ 「∎」在这里标记的是**提纲的完整交付**，不是定理的完整证明。这一条是本图上少数几条明确标注「不给完整证明」的定理之一 —— 理由是完整证明的篇幅与所用工具（Fubini + Whitney 分解）都超出了本团其余内容的层次。
