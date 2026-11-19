# imp.dense-simple-compact-support
`imp.dense-simple-compact-support` · 推出 · strong 边 · 根 `../`

`def.simple-function` 简单函数 + `def.lp-norm` L^p 范数 → `prop.dense-simple-compact-support` 紧支简单函数稠密

**证明。** 先截断：令 $E_{k}=\{|f|>1/k\}$，则 $\mu(E_{k})\le k^{p}\|f\|_{p}^{p}<\infty$，且由 DCT $\|f-f\chi_{E_{k}}\|_{p}\to0$。对 $f_{k}=f\chi_{E_{k}}$，取简单函数列 $\{f_{k,n}\}$ 使 $f_{k,n}\to f_{k}$ a.e.、$|f_{k,n}|\le|f_{k}|$，并在 $E_{k}$ 外取 0。于是每个 $f_{k,n}$ 是**有限测度支撑**的简单函数，且由 DCT（控制函数 $2^{p}|f_{k}|^{p}$）$\|f_{k,n}-f_{k}\|_{p}\to0$。取 $n_{k}$ 使 $\|f_{k,n_{k}}-f_{k}\|_{p}<1/k$，结合 $\|f_{k}-f\|_{p}\to0$ 得 $\|f_{k,n_{k}}-f\|_{p}\to0$。∎
