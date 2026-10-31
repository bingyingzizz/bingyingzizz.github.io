# 可积的定义 $\implies$ Darboux 判据
`imp.darboux-criterion` · 推出 · strong 边 · 根 `../`

`def.riemann-integrable` Riemann 可积 → `thm.darboux-criterion` Darboux 判据

**(ii) 设标记和收敛到 $I$。** 任取分割 $P$ 与 $\varepsilon > 0$。用**同一分割** $P$、取使 $f(\xi_i)$ 逼近 $M_i$ 的标记，可得 $S > U(f, P) - \varepsilon$；取使 $f(\xi_i)$ 逼近 $m_i$ 的标记得 $S < L(f, P) + \varepsilon$。两者都随模趋于 $I$，故 $|U(f, P) - I| \le \varepsilon$、$|L(f, P) - I| \le \varepsilon$ 对足够细的 $P$ 成立，于是 $U^{*} = L^{*} = I$。∎

> 两个方向里，(i) 是真正的技术活：**任意**细分割要与一个**固定**的加细比较，差的部分就是那些跨过分割点的区间 —— 它们的总长度被 $\|Q\|$ 控制住了。
