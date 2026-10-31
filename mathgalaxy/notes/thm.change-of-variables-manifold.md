# 流形上的换元公式　`thm.change-of-variables-manifold`　·　说明
根 `../`

**绝对值的有无就是定向的有无**：不带定向时能积的只有密度，换元带 $|\det|$（`prop.volume-density-well-defined`）；带定向时 $n$-形式自带符号，换元带 $\det$。同一件事的两种记账。

**为什么只对 $n$-形式成立**：$k<n$ 的形式在微分同胚下按 $k\times k$ 的子式变换，与 $n$ 维体积元对不上，所以不存在「$k$-形式在流形上的换元公式」。要积分 $k$-形式，得先挑一个 $k$ 维子流形把它拉回去（`def.integral-form` 开头那句）。

**证明的两块拼图**：一是「保向微分同胚下积分不变」（`def.integral-form` 的良定性，就是 $\mathbb{R}^{n}$ 上 $\det$ 与换元公式的匹配），二是单位分解（`prop.paracompact-partition-unity`）把整体拆到卡里。两块都在别处证过，所以这条定理本身是拼装。

> 续见 notes/thm.change-of-variables-manifold.2.md
