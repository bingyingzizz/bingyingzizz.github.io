# Mayer–Vietoris 序列　`thm.mayer-vietoris`　·　说明
根 `../`

 $a_{U}$ 光滑：在 $U \setminus V$ 上 $\rho_{V} = 0$；同理 $a_{V}$。于是 $s(a_{U}, a_{V}) = \rho_{V}\omega + \rho_{U}\omega = \omega$。核等于像：$s(\omega_{U}, \omega_{V}) = 0$ 说明两块在 $W$ 上相等，故拼成 $M$ 上的整体形式。

**第二步：蛇引理给长正合列**。$r, s$ 与 $\mathrm{d}$ 交换（限制与差逐点作用），故上述短正合列是链复形的短正合列。链复形短正合列的标准结论（蛇引理）给出长正合列 

$$\cdots \to H^{k}(M) \xrightarrow{r^{*}} H^{k}(U) \oplus H^{k}(V) \xrightarrow{s^{*}} H^{k}(W) \xrightarrow{\delta} H^{k+1}(M) \to \cdots$$

 其中 $\delta$ 由图表追踪定义。以下把 $\delta$ 写成显式形式，并逐项验证正合性（这也就重证了本情形需要的蛇引理）。

**第三步：$\delta$ 的显式形式**。取闭的 $\omega \in \Omega^{k}(W)$，令 

> 续见 notes/thm.mayer-vietoris.3.md
