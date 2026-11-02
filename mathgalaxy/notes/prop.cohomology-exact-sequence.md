# 同调的短正合列　`prop.cohomology-exact-sequence`　·　说明
根 `../`

也就是 $0 \to Z^{k}/B^{k} \to K^{k}/B^{k} \to Z^{k+1} \to Z^{k+1}/B^{k+1} \to 0$。这条把「同调」拆成两段：**先取余核去掉上一步的像，再取核挑出闭链，最后取商** —— 于是复形里的信息被一层层剥出来。

**证明。** 记 $Z^{k} := \ker d^{k}$、$B^{k} := \operatorname{im} d^{k-1}$，于是 $H^{k} = Z^{k}/B^{k}$、$\operatorname{coker} d^{k-1} = K^{k}/B^{k}$。要证的四个箭头依次是：
- $Z^{k}/B^{k} \to K^{k}/B^{k}$：由含入 $Z^{k} \hookrightarrow K^{k}$ 诱导，单射（$Z^{k}$ 在 $K^{k}$ 里，商掉同一个 $B^{k}$）；
- $K^{k}/B^{k} \to Z^{k+1}$：由 $d^{k}$ 诱导（它把 $B^{k} = \operatorname{im} d^{k-1}$ 送到 $d^{k}d^{k-1} = 0$，故下降得良定义）。核正是「$d^{k}x = 0$ 的那些 $x + B^{k}$」＝ $Z^{k}/B^{k}$；
- $Z^{k+1} \to Z^{k+1}/B^{k+1} = H^{k+1}$：取商映射，满，核是 $B^{k+1} = \operatorname{im} d^{k}$ —— 正好是上一个箭头的像。∎
三段正合各只用到「$d^{2} = 0$」和核/余核的泛性质。
