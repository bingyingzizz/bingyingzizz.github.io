# 消解的同伦唯一性　`prop.resolution-homotopy`　·　说明
根 `../`

**证明（比较定理取 $f = 1_{M}$，两次）。**
对 $1_{M} : M \to M$ 与（$P_{\bullet}$、$Q_{\bullet}$）用比较定理的存在性，得提升 $\varphi$；把两个消解互换再用一次，得提升 $\psi$。两次都有 $\varepsilon\psi = \varepsilon$。
再看复合：$\psi\varphi : P_{\bullet} \to P_{\bullet}$ 也是 $1_{M}$ 的提升（增广处：$\varepsilon\psi\varphi = \varepsilon\varphi = \varepsilon$ ✓），而 $1_{P_{\bullet}}$ 当然是 $1_{M}$ 的提升，于是由比较定理的**同伦唯一性**得 $\psi\varphi \sim 1_{P_{\bullet}}$ ✓；另一边同理 ✓。∎

⭐ **这才是「消解可以随便挑」的合法依据。** 计算时通常挑最短、最显式的那条（自由模、两项、Koszul 复形），换一条不影响结果 —— 但只保证结果同构，**不保证中间出现的族一致**。

**举例（同伦等价但不同构）**：在 $P_{\bullet}$ 上直和一条形如

$$\cdots \to 0 \to P_{0} \xrightarrow{\ 1\ } P_{0} \to 0 \to \cdots$$

> 续见 notes/prop.resolution-homotopy.2.md
