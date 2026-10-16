# 极小多项式整除特征多项式　`thm.minimal-poly-divisor`　·　说明
根 `../`

⭐ 三条里的第一条是 Cayley–Hamilton + 理想性的直接后果：$\chi_T \in I_T = (\mu_T)$。

⭐ 第二条（同根）的证明值得记住：若 $\lambda$ 是特征值、$v$ 是特征向量，则 $\mu_T(T)v = \mu_T(\lambda) v$，而 $\mu_T(T) = 0$、$v \ne 0$，故 $\mu_T(\lambda) = 0$；反向由 $\mu_T \mid \chi_T$ 得到。

⚠ 第三个断言的「在代数闭包上看」不能省：$\mu_T$ 是否无重根要到扩域里判（$\mathbb{R}$ 上的旋转：$\mu_T = x^{2} + 1$ 无重根，在 $\mathbb{C}$ 上可对角化，在 $\mathbb{R}$ 上不能）。
