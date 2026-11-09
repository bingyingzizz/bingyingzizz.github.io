# Lagrange 反演公式的证明（形式留数）
`imp.lagrange-inversion` · 推出 · strong 边 · 根 `../`

`def.formal-power-series` 形式幂级数 → `thm.lagrange-inversion` Lagrange 反演公式

$。令 $F=H\varphi^n$，则 $F'=H'\varphi^n+nH\varphi^{n-1}\varphi'$，故
由 $H\varphi^{n-1}\varphi'=\frac1n\bigl(F'-H'\varphi^n\bigr)$ 得
$$H\varphi^{n-1}(\varphi-t\varphi')=H\varphi^n-\frac tn\bigl(F'-H'\varphi^n\bigr)=F-\frac tnF'+\frac tnH'\varphi^n .$$
取 $t^n$ 系数：$[t^n]F-\frac1n[t^n]tF'+\frac1n[t^{n-1}]H'\varphi^n$。因 $[t^n]tF'=n[t^n]F$，前两项相消，得
$$[x^n]H(w)=\frac1n[t^{n-1}]\,H'(t)\,\varphi(t)^n .$$
取 $H(t)=t$ 即得 $[x^n]w=\frac1n[t^{n-1}]\varphi^n$。$\blacksquare$
⚠ 以上是形式幂级数层面的推导，不涉及收敛半径；解析情形（反函数定理）是同一公式在收敛域内的解释。
