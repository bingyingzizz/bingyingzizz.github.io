# 正则水平集定理　`thm.regular-level-set`　·　说明
根 `../`

**第二步：图册**。$M\subseteq\mathbb{R}^{n}$ 是第二可数空间的子空间，故 Lindelöf；上述图卡（它们的定义域是 $M$ 的开集）覆盖 $M$，故可取出可数子覆盖。两张卡重叠处 $\varphi_{\beta}\circ\varphi_{\alpha}^{-1}(u) = \psi\bigl(u, g_{\alpha}(u)\bigr),$ 其中 $\psi$ 是坐标投影（线性映射，光滑）、$g_{\alpha}$ 光滑，复合仍光滑；故转移映射 $C^{\infty}$。$M$ 从 $\mathbb{R}^{n}$ 继承 Hausdorff 与第二可数性，于是是 $n-m$ 维光滑流形。

**第三步：切空间**。若 $\gamma : (-\varepsilon,\varepsilon)\to M$ 光滑、$\gamma(0)=p$，则 $F\circ\gamma\equiv c$，链式法则给 $\mathrm{d}F_{p}\bigl(\dot{\gamma}(0)\bigr) = 0$，故 $T_{p}M\subseteq\ker\mathrm{d}F_{p}$。反过来，上面那张卡给出 $\dim T_{p}M = n-m$；秩定理（秩 $m$）给出 $\dim\ker\mathrm{d}F_{p} = n-m$。两边同维且前者包含于后者，故相等。∎

**例子**：$F(x) = \lVert x\rVert^{2}$，它在 $F^{-1}(1) = S^{n-1}$ 上梯度为 $2x\ne 0$，故球面是流形。

> 续见 notes/thm.regular-level-set.3.md
