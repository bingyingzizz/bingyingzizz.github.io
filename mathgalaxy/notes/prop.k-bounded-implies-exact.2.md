# 相邻两条 K-有界 推出 正合　`prop.k-bounded-implies-exact`　·　说明
根 `../`

⚠️ **原版证明错在哪**：它想把 $M^{n+1}$ 处的 $K$-有界性用在 $s'_{i+1} - s'_{i}$ 上，写成 $\|s'_{i+1} - s'_{i}\| \le K\|d(s'_{i+1}-s'_{i})\| + \varepsilon$。但定义给的是**另一头**的估计（把 $\|s - ds'\|$ 压到 $K\|ds\| + \varepsilon$），它**不能**把 $\|s'\|$ 本身界住 —— 所以那个几何级数并不收敛。

📌 想要**带界的具体原像**，用开映射定理：$\operatorname{im} d^{n+1}$ 闭、$M^{n+1}$ Banach，故 $d^{n+1} : M^{n+1} \twoheadrightarrow \operatorname{im} d^{n+1}$ 是开映射，于是存在 $c$ 使每个 $z \in \operatorname{im} d^{n+1}$ 都有原像 $w$ 满足 $\|w\| \le c\|z\|$。这才是「被控制住的原像」的正确来源。
