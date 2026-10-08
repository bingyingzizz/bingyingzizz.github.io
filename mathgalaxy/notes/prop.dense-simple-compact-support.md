# 紧支简单函数稠密　`prop.dense-simple-compact-support`　·　说明
根 `../`

证明：对 $f \in L^p$，取简单函数列 $\{f_n\}$ 使 $f_n \to f$ a.e. 且 $|f_n| \le |f|$（简单函数逼近定理给的就是这个形状）。于是 $f_n \in L^p$，且



$$|f_n - f|^p \le 2^p |f|^p \in L^1$$



由 DCT 得 $\|f_n - f\|_p \to 0$。$f_n$ 是简单函数、支撑集有限 —— 这就是要的稠密性。∎

⚠ **$p = \infty$ 时这条失效**：$L^\infty$ 里的简单函数是「有限个值」，均匀逼近一个连续函数办不到（例如 $\sin$ 型或一般的连续函数）。
