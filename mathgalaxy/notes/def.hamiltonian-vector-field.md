# Hamilton 向量场　`def.hamiltonian-vector-field`　·　说明
根 `../`

⚠️ **符号约定五花八门**：$\iota_{X_{H}}\omega = dH$、$= -dH$、$\omega(X_{H}, \cdot) = dH$ 三种都在用，差一个整体符号（等价于 $H \mapsto -H$）。本图取 $\iota_{X_{H}}\omega = -dH$，与 Arnold 一致；换书时**必须重新核对 Hamilton 方程的符号**。

⭐ **「函数 $\implies$ 向量场」是辛几何独有的**：一般流形上函数只能求微分（$dH$，一个 1-形式），要有向量场就需要一个「把 1-形式变成向量场」的同构 —— 那正是 $\omega$ 干的事（$\flat : TM \to T^{*}M$，$v \mapsto \iota_{v}\omega$）。Riemann 度量也能这么干（音乐同构），但得到的流不保持度量。

⚠️ **Hamilton 向量场 $\ne$ 任意向量场**：它是 $H$ 的「梯度旋转 90°」。判据：$\iota_{X}\omega$ 是**闭**的（即 $d(\iota_X\omega)=0$）。不闭的叫「局部 Hamilton 向量场」，闭的叫「辛向量场」—— 多数书不区分（因为 $H^{1}(M) = 0$ 时两者一致）。

> 续见 notes/def.hamiltonian-vector-field.2.md
