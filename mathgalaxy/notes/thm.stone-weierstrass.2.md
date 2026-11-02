# Stone–Weierstrass 定理　`thm.stone-weierstrass`　·　说明
根 `../`

- **对称地压上方**：对 $-f$ 重复上面两步（等价地直接用 $\min$），得 $h' \in \overline{A}$ 使 $h' < f + \varepsilon$。
- **合起来**：$h' \le h$ 在 $\overline{A}$ 里夹住 $f$，取 $h'' := \max(h', \min(h, f))$ 或直接用 $\|h - f\| \le \varepsilon$，得 $\|f - h\| < 2\varepsilon$。$\varepsilon$ 任意，于是 $f \in \overline{A}$，于是 $\overline{A} = C(K)$。∎

⚠️ 三条假设缺一不可：$A = \{f : f(0) = 0\}$ 缺单位；$A = $ 常数函数缺分离点。

⭐ 这是「用**代数**性质换**逼近**能力」的样板：不需要光滑、不需要可数、不需要任何具体核。经典 Weierstrass 定理（多项式逼近）就是 $K = [a,b]$、$A = $ 多项式的特例。
