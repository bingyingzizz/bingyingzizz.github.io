# Lagrange 反演公式的证明（形式留数）
`imp.lagrange-inversion` · 推出 · strong 边 · 根 `../`

`def.formal-power-series` 形式幂级数 → `thm.lagrange-inversion` Lagrange 反演公式

设 $w=x\varphi(w)$，$\varphi_0\ne0$。先证唯一性：把 $w=\sum_{n\ge1}w_nx^n$ 代入，比较 $x^n$ 系数，右端 $x\varphi(w)$ 只含 $w$ 的一次及以上的项，因此 $w_n$ 由 $w_1=\varphi_0$ 与 $w_1,\ldots,w_{n-1}$ 唯一决定。
对系数用形式留数（即 $[x^n]F(x)=\operatorname{Res}F(x)\,dx/x^{n+1}$）：
$$[x^n]H(w(x))=\operatorname{Res}\frac{H(w(x))}{x^{n+1}}\,dx.$$
作变量替换 $t=w(x)$。由 $x=t/\varphi(t)$ 得 $dx=\frac{\varphi(t)-t\varphi'(t)}{\varphi(t)^2}\,dt$，$x^{-n-1}=t^{-n-1}\varphi(t)^{n+1}$，于是
$$[x^n]H(w)=\operatorname{Res}\frac{H(t)\,\varphi(t)^{n-1}\bigl(\varphi(t)-t\varphi'(t)\bigr)}{t^{n+1}}\,dt,$$
即 $[x^n]H(w)=[t^n]\bigl(H\varphi^{n-1}(\varphi-t\varphi')\bigr)$。
下面把它化成 $\frac1n[t^{n-1}]H'\varphi^n

> 续见 proofs/imp.lagrange-inversion.2.md
