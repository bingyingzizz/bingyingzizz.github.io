# 无环性的四条等价说法　`prop.acyclic-equivalent-conditions`　·　说明
根 `../`

**证明。**
**(1) $\iff$ (2)**：层上同调就是「高次上同调预层」的整体截面，$H^{n}(X, M) = \Gamma\bigl(X, H^{n}(M)\bigr)$ ✓，两边同时为零 ✓。
**(1) $\implies$ (3)**：对固定覆盖用 Cartan–Leray 谱序列 $E^{p,q}_{2} = \check{H}^{p}(\mathfrak{X}, H^{q}(M)) \implies H^{p+q}(X,M)$ ✓；(1) 让 $q \ne 0$ 的行全为零、$H^{p+q}$ 也全为零（$p+q \ne 0$），谱序列退化给出 $\check{H}^{n}(\mathfrak{X}, M) = 0$ ✓。
**(3) $\implies$ (4)**：$\check{H}^{n}(X, -)$ 是沿覆盖取的滤过余极限 ✓，每个覆盖上都为零故为零 ✓。
**(4) $\implies$ (1)**：把同一句话反过来 —— 用 Čech 到上同调的谱序列逐次消去，$E^{p,q}_{2}$ 的右端全为零，故全为零 ✓。∎
