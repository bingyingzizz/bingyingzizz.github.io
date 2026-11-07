# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

⚠️ **为什么不能对任意覆盖逐覆盖断言（陈述末句已按此修正）**：取 $X=S^{2}$、$\mathcal{M}=\mathbb{Z}$ 与两个半球的开覆盖 $\{U,V\}$（局部有限）：$U\cap V$ 同胚于环带，$\check{C}^{2}=0$ 故 $\check{H}^{2}(\mathfrak{U},\mathbb{Z})=0$，而 $H^{2}(S^{2},\mathbb{Z})=\mathbb{Z}$。逐覆盖断言因此为假；正确形式是沿覆盖的定向极限 $\check{H}^{n}(X,\mathcal{M})=\varinjlim_{\mathfrak{U}}\check{H}^{n}(\mathfrak{U},\mathcal{M})\cong H^{n}(X,\mathcal{M})$，对**好覆盖**（有限交上高阶上同调为零，对常值层即有限交可缩）才能逐覆盖。

> 续见 notes/thm.paracompact-cech-equals-sheaf.10.md
