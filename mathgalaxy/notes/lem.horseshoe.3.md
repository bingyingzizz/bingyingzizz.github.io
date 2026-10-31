# 马蹄引理　`lem.horseshoe`　·　说明
根 `../`

_{n}(Q) \xrightarrow{\ \delta\ } H_{n-1}(P) \to \cdots$$
其中 $H_{0}(P) \cong M_{1}$、$H_{0}(Q) \cong M_{2}$，而 $H_{n}(P) = H_{n}(Q) = 0$（$n \ge 1$，两端是消解）。逐段读：
- $n \ge 2$：$H_{n}(R)$ 被两个 $0$ 夹住，为零 ✓；
- $n = 1$：$0 = H_{1}(P) \to H_{1}(R) \to H_{1}(Q) = 0$，故 $H_{1}(R) = 0$ ✓；
- $n = 0$：得正合段 $M_{1} \xrightarrow{\ i\ } H_{0}(R) \to M_{2} \to 0$，与 $0 \to M_{1} \to M \to M_{2} \to 0$ 比较即得 $H_{0}(R) \cong M$ ✓。
三条合起来：$H_{0}(R) \cong M$、$H_{n}(R) = 0$（$n \ge 1$），而每项 $R_{n}$ 是投射对象的直和、仍投射 —— 所以 $R_{\bullet}$ 确实是 $M$ 的投射消解 ✓。∎

> 续见 notes/lem.horseshoe.4.md
